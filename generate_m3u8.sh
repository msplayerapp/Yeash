#!/bin/bash
echo "#EXTM3U" > playlist.m3u8
while IFS= read -r line; do
  name=$(basename "$line" .mp4)
  echo "#EXTINF:-1,$name" >> playlist.m3u8
  echo "$line" >> playlist.m3u8
done < mp4_links.txt
