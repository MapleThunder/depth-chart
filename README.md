# Depth Chart

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

I decided to create this app to help myself track who my local football team, the Halifax Wanderers, were signing before the season started and where those players might fit in on the pitch. I copied the appearance from a particular screen in the video game Football Manager 2022 that showed the same information. There are 9 boxes arranged to match only a single specific formation, 4-2-3-1 and the colour of the header bar for each position changes as you add more players to the different positions:

- Red: not enough players to start
- Yellow: enough players to start but more depth needed
- Green: enough depth in this position

All data is saved to local storage, nothing is sent over the network.

## How to Use the Project

- Add a player to the pitch using the form on the left by typing in a name and selecting 1+ position(s).
- As more players are added the headers will change colour depending on the position
- You can drag-and-drop players within a position box to rearrange their order
- You can click on a player name to get an edit modal where you can add/remove positions, change the name, or remove the player entirely
- There is a "Clear" button at the top of the page that will remove all players on the pitch
