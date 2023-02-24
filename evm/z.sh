#!/bin/bash

[[ asdf =~ a(.*) ]]; echo ${BASH_REMATCH[1]}
