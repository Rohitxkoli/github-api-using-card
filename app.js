// select the elements:
const body = document.querySelector("#body");
const imgDIV = document.querySelector("#img");
const imgTag = document.querySelector("#imgTag");
const nameDIV = document.querySelector("#name");
const followersDIV = document.querySelector("#followers");
const personalDataDIV = document.querySelector("#personalData");

// page Load Event

// api now

const apiCall = function () {
  const xhr = new XMLHttpRequest();
  // const api = "https://api.github.com/users/hiteshchoudhary";
  const api = "https://api.github.com/users/Rohitxkoli ";
  xhr.open("GET", api);
  let apiDATA = null;
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const dataWithString = this.response;
      // console.log(dataWithString);
      const dataWithJson = JSON.parse(dataWithString);
      console.log(typeof dataWithJson);

      apiDATA = dataWithJson;
      generateUI(apiDATA);
    }
  };
  xhr.send();
};

const generateUI = function (api) {
  console.log(api);
  console.log("generateUI working");

  // image add
  imgTag.src = api.avatar_url;

  //name add
  nameDIV.innerHTML = `Name: ${api.name} ❤️`;

  // followers add
  followersDIV.innerHTML = `Github Followers: ${api.followers} ${
    api.followers < 500 ? "📈" : "📉"
  }`;

  // about
  personalDataDIV.innerHTML = `Bio: ${api.bio}`;
};
