#!/bin/bash

    if [[ $1 =~ $2 ]]; then 
	echo ${BASH_REMATCH[1]}
    else
        echo "$1 does not match"
    fi
