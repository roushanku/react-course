function customRendor (reactElement , mainContainer) {
    // creating element
   
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children

    domEle.setAttribute('href' , reactElement.props.href)
    domEle.setAttribute('target' , reactElement.props.target)

    mainContainer.appendChild(domEle)

    // lets optimize the above code
    /*
    const domEle = document.createElement(reactElement.type)

    domEle.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        domEle.setAttribute(prop , reactElement.props[prop])
    }

    mainContainer.appenChild(domEle)
    */
}   
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click here to visit google"
}

// getting reference of root
const mainContainer = document.querySelector('#root')

// function which will inject -> take twp input where to inject
//what to inject

customRendor(reactElement , mainContainer)