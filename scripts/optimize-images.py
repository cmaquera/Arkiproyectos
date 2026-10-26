"""Prepare responsive photographs. SVG illustrations remain vector assets.

Usage: python scripts/optimize-images.py --hero-source /path/to/original.png
Requires Pillow with WebP support. Never enlarges the source photographs.
"""

import argparse
from pathlib import Path

from PIL import Image, ImageOps, features


ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "images"
OUTPUT = IMAGES / "optimized"


def resized(image, width):
    if width > image.width:
        raise ValueError("Source photograph is smaller than the requested width")
    return image.resize(
        (width, round(image.height * width / image.width)), Image.Resampling.LANCZOS
    )


def webp_versions(image, name, widths, quality=82):
    for width in sorted(set(min(width, image.width) for width in widths)):
        destination = OUTPUT / f"{name}-{width}.webp"
        resized(image, width).save(destination, "WEBP", quality=quality, method=6)
        print(f"{destination.relative_to(ROOT)}: {destination.stat().st_size:,} bytes")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--hero-source", type=Path, required=True)
    args = parser.parse_args()
    if not features.check("webp"):
        parser.error("This Pillow installation does not support WebP")
    with Image.open(args.hero_source) as original:
        hero = ImageOps.exif_transpose(original).convert("RGB")
    if hero.width < 2752 or hero.height < 1536:
        parser.error("Use the full resolution hero original, at least 2752 × 1536")

    OUTPUT.mkdir(parents=True, exist_ok=True)
    webp_versions(hero, "hero-bg", [1440, 1920, 2752], quality=84)

    # Match the existing mobile focus at 60%, while avoiding unused side pixels.
    mobile_width = min(864, int(hero.height * 9 / 16))
    mobile_height = round(mobile_width * 16 / 9)
    mobile = ImageOps.fit(
        hero, (mobile_width, mobile_height), Image.Resampling.LANCZOS,
        centering=(0.60, 0.5),
    )
    webp_versions(mobile, "hero-bg-mobile", [480, mobile_width], quality=84)

    # JPEG is the fallback for the hero and the widely compatible social image.
    resized(hero, 1920).save(
        IMAGES / "hero-bg.jpg", "JPEG", quality=85, optimize=True, progressive=True
    )

    for name in [
        "architecture-modern", "about-image", "services-hero", "about-hero", "contact-hero"
    ]:
        with Image.open(IMAGES / f"{name}.jpg") as original:
            photo = ImageOps.exif_transpose(original).convert("RGB")
        webp_versions(photo, name, [480, 800, photo.width])


if __name__ == "__main__":
    main()
