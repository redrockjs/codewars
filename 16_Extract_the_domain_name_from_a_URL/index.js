
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];

    // let result = url.match(/(https?:\/\/)?(www.)?(\w+)\.\w+/i)[3] )
}

console.log(domainName("http://www.zombie-bites.com"))


//TASK
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// TEST
// TextEncoderStreamdescribe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(domainName("http://google.com"), "google");
//         Test.assertEquals(domainName("http://google.co.jp"), "google");
//         Test.assertEquals(domainName("www.xakep.ru"), "xakep");
//         Test.assertEquals(domainName("https://youtube.com"), "youtube");
//     });
// });

// ALT SOLUTION
// function domainName(url){
//     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }