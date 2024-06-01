// create a variable to hold your NFTs
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, uid, contact, grade) {
    const nft = {
        name: name,
        uid: uid,
        contact: contact,
        grade: grade
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("uid: " + nfts[i].uid);
        console.log("contact: " + nfts[i].contact);
        console.log("grade: " + nfts[i].grade);
        console.log("-------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT('Kajal', '123', '8445306532', 'A');
mintNFT('Harshit', '124', '9411315172', 'B');
mintNFT('Tanmay', '125','7906567887', 'C');

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log("Total NFTs: " + getTotalSupply());
