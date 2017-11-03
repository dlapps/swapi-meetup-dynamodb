#!/usr/bin/env bash

rm -rf dist;
mkdir dist;
zip -r dist/source.zip . -x shell/* -x dist/*