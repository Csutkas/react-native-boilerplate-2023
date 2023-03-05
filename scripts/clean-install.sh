#!/bin/bash

# Cleanup the project build resources
# and re-install the dependencies
# - Remove watchmen cached files
# - Remove react & npm temp files and node modules
# - Remove Android and iOS build files
# - Re-install node module dependencies
# - Re-install iOS Pod dependencies

watchman watch-del-all &&
rm -rf $TMPDIR/react-* ; rm -rf $TMPDIR/npm-* ; rm -rf $TMPDIR/metro*; rm -rf node_modules &&
rm -rf ./android/build ; rm -rf ./android/app/build ; rm -rf ios/build &&
npm install && cd ios && bundle install && bundle exec pod install && cd ..