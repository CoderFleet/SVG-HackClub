const svg = document.getElementById('Triangles')

svg.onclick = (e) => {
    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
    const rando = () => colors[Math.floor(Math.random()* colors.length)]
    
        document.documentElement.style.cssText = `
        --dark-color: ${rando()};
        --light-color: ${rando()};
        `
}