function customRender(element, container) {
    /*const domelement = document.createElement(element.type);
    domelement.innerHTML = element.children
    domelement.setAttribute("href", element.props.href)
    domelement.setAttribute("target", element.props.target)

    container.appendChild(domelement) 
    */

    const domelement = document.createElement(element.type);
    domelement.innerHTML = element.children
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to open google"
}

const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer)