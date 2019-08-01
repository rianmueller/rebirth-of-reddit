/*
r/cableporn
Required elements:
1) title [data.title] (shouldn't be more than two lines tall)
2) subtitle (shouldn't be more than two lines tall)
    a) data.author
    b) data.created (timestamp)
    c) data.ups (upvotes)
3) image [data.url]
4) text snippet [data.selftext or data.selftext_html] (shouldn't be more than four lines tall)
5) Google fonts:
    a) Oswald regular
    b) Lato regular

Elements to implement:
1) Top logo/nav bar
    a) Top white stripe
        i) Logo
        ii) Plus icon
            1) Orange on mouseover
    b) Gray nav bar
        i) Random link
        ii) My Boards link
        iii) Get the App link
        iv) Link text should become orange on mouseover
        v) Thin gray border line along the top
        vi) Shadow along bottom
2) Content pane
    a) Post cards
        i) Multiple cards
        ii) Shadow on all sides
        iii) Image
            1) Should be resized/cropped to fit card dimensions with padding on all sides
        iv) Title
            1) Must be no more than 2 lines
        v) Subtitle
            1) Author
            2) Posting date
            3) View count (or upvotes if unavailable)
            4) Must be no more than 2 lines
        vi) Text
            1) Must be no more than 4 lines
        vii) Orange border on mouseover
3) Gray footer
    a) Facebook icon
        i) Orange on mouseover
    b) Instagram icon
        i) Orange on mouseover
    c) Thin gray border along the top
*/

let header1 = document.createElement("div");
header1.id = "header1";
document.body.appendChild(header1);

let logoPinstripe = document.createElement("img");
logoPinstripe.id = "logoPinstripe";
logoPinstripe.src = "/assets/header_bg.svg";
header1.appendChild(logoPinstripe);

let logo = document.createElement("img");
logo.id = "logo";
logo.src = "/assets/logo.svg";
header1.appendChild(logo);

// let plusIcon = document.createElement("div");
// plusIcon.id = "plusIcon";
// plusIcon.innerHTML = "+";
// header1.appendChild(plusIcon);

let header2 = document.createElement("div");
header2.id = "header2";
header2.innerHTML =
  "RANDOM &nbsp;&middot;&nbsp; MY BOARDS &nbsp;&middot;&nbsp; GET THE APP";
document.body.appendChild(header2);

let contentPane = document.createElement("div");
contentPane.id = "contentPane";
document.body.appendChild(contentPane);

let footer = document.createElement("div");
footer.id = "footer";
document.body.appendChild(footer);

let fbIcon = document.createElement("img");
fbIcon.id = "fbIcon";
fbIcon.src = "/assets/facebook_grey.svg";
footer.appendChild(fbIcon);

let footerIconSeperator = document.createElement("div");
footerIconSeperator.innerHTML = "&nbsp;&nbsp;&nbsp;";
footer.appendChild(footerIconSeperator);

let instaIcon = document.createElement("img");
instaIcon.id = "instaIcon";
instaIcon.src = "/assets/instagram_grey.svg";
footer.appendChild(instaIcon);
