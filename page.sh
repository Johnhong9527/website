#!/bin/sh
sudo git checkout meast
sudo git pull
sudo cp -r dist/ ../page
sudo git checkout page
sudo rm -rf *
sudo mv -r ../page/* ./
