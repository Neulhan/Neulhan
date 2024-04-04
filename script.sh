#!/bin/bash

# The first argument ($1) will be the file path that triggered the event

# input="Thu Apr  4 15:41:33 2024 /Users/neulhan/Dev/blog/Neulhan/src/postsimages/PEP1/1.png"

file_path=$(echo "$1" | awk '{print $6}')
preext="${file_path##*.}"

if [ "$preext" == "webp" ]; then
    exit 0
fi

if [ -f $file_path ]; then
    newext=".webp"
    new_file_path=$file_path$newext
    cwebp -q 40 $file_path -o $new_file_path -quiet
    rm $file_path
    aws s3 sync tmp/ s3://neulhan-blog/images --profile=neulhan
    sleep 5
    rm $new_file_path
else
    echo "[deleted] $1 "
    exit 0
fi
