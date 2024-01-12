## Category: Project
## Memory_card
* Link: https://memorycard-4f859.web.app/home (Mobile view also available :) )
* Demo: https://youtu.be/pwbkwa7UlGU
## What project about ?
  + Developed Angular/Ionic/RxJs mobile client-side interface helps user taking photos and customizing description of user’s moments into cards
## Core functionality / Guideline
  1. Add functionality (top right corner) 
    + User can add many group option, and/or generate editing Card in List View 
  2. Search functionality(middle top)
    + On time filter on editing cards  **(Note: only work when having editing cards created within List View)** 
       + eg. type 'as' will filter all cards word that contain substring of 'as'
       + Therefore, type less letter will match more cards. More letters will match less cards
     + Empty input, will show all editing cards in List View
     + Once type exact word matching on specific editing card, then click **search** button (next to on right). It will put searched card into Collection View aka verticle nav bar. 
  3. Collection View to view cards in more organized and better UI mode (toggle navigation bar with white arrow on top left) 
     + Before spread Collection view: Either click **white arrow** or  specific **card picture** on View to spread.
     + Toggle and Spread: Once more cards added in selected group, can see **+** and  **card picture** displayed on Collection View. Either click "card picture" to toggle/spread only specific card or "+" to toggle/spread all cards within group. Click back "+" and  "card picture" again to observe vice versa effect.
  4. Switch group + Rank cards on Collection View **( Note: only work when having cards created within Collection View)**
     + Once more cards added in selected group, can edit on cards in ListView,such as toggle Group to change cards to different group
     + Link on stars to change order of cards within specific group in Collection View
  5. Pop up Modal (click on black pencil of specific editing card in ListView) - **(Note: only work when having cards created within Collection View)**
     + **(initially have pair attribute Skill and Lv)** . In Modal, can change name of those attribute, its bullet point appearance. And also add picture for specific cards in Collection View
     + Once done, click **Confirm** to save the change, otherview no change reflected
     + Once Modal switch down, you can click **+ Attribute** to see new attribute avaible for input
     



## Step to reproduce
### npm package
- install npm package, if your local machine don't have it yet. https://nodejs.org/en/download
  - use "npm -v" to check your machine has npm
### Download and run in development
1. Download the file in VSCode
2. Open Terminal, use command "npm i"
3. command "npm run start"

