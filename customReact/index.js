function customRender(mainContainer , ReactEle){
    const Reactdom = document.createElement(ReactEle.type)
    Reactdom.innerHTML = ReactEle.childern;

    for (let prop in ReactEle.props) {
        if(prop === 'childern') continue;
      Reactdom.setAttribute(prop, ReactEle.props[prop])
    }

    mainContainer.appendChild(Reactdom)
}

const mainContainer = document.getElementById('root')
const ReactEle = {
    type : 'a',
    props:{
        href: 'https://google.com',
        target: '_black'
    },
    childern : 'click to visit google'

    
}
console.log("hello")

customRender(mainContainer  , ReactEle);