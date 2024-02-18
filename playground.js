/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let tokens = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, url) {
    let nft = {
        "name": name,
        "description": description,
        "url": url
    };
    tokens.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < tokens.length; i++) {
        console.log("\nToken number:", + (i+1));
        console.log("Name: " + String(tokens[i].name));
        console.log("Description: " + String(tokens[i].description));
        console.log("URL: " + String(tokens[i].url));
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(tokens.length);
}

// call your functions below this line

mintNFT("funniMonkey", "Funny looking monkey", "https://fungible/.com/nft1.svg");
mintNFT("sadMonkey", "A sad monkey", "https://fungible/.com/nft2.svg");

console.log("Total tokens available: ");
getTotalSupply();

listNFTs();