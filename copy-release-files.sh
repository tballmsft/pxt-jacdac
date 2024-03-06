#!/bin/sh

set -e
rm -rf dist
mkdir dist
cp -v tools/microbit-jukebox/built/binary.hex dist/microbit-jukebox.hex

