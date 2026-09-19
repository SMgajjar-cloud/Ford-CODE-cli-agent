#!/usr/bin/env bash
# FORD CODE — Global Setup Script

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TARGET_DIR="$HOME/.local/bin"

mkdir -p "$TARGET_DIR"

chmod +x "$DIR/ford.js"

ln -sf "$DIR/ford.js" "$TARGET_DIR/ford"
ln -sf "$DIR/ford.js" "$TARGET_DIR/ford-code"

echo "✔ FORD CODE successfully linked to $TARGET_DIR"
echo "You can now run 'ford' or 'ford code' from any terminal window!"
