#!/bin/bash

    if [[ $1 =~ $2 ]]; then echo ${BASH_REMATCH[1]}; fi
