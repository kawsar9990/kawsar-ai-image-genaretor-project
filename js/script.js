console.log('Website Creator Name: Engineer MD Kawsar Ahmed')

const textBox = document.querySelector('.text_box')
const ButtonAi = document.querySelector('.dice_btn')
let box = document.querySelector('.filebox')
let genartBox = document.querySelector('.gen_btn')

const product = [
    "Traditional Bengali sweets arranged on a brass plate, soft natural light from a nearby window.",
    "A futuristic city at sunset, with flying cars, tall glass buildings, and neon lights, in cyberpunk style",
    "A golden retriever is sitting on a grassy field under a bright blue sky.",
    "A medieval castle on top of a foggy mountain, sunrise lighting, highly detailed fantasy art.",
    "A serene lake surrounded by autumn trees, orange and red leaves falling, soft sunlight, ultra-realistic.",
    "A vast desert under a starry night, with a single caravan of camels moving slowly, surreal and dreamy.",
    "A giant robot standing in the middle of a destroyed city, smoke and fire around, dark sci-fi vibe.",
    "A dragon flying over a floating island in the sky, epic fantasy scene, dramatic lighting.",
    "A portrait of a woman in Van Gogh style, swirling brush strokes, bright yellow and blue tones.",
    "A dreamy landscape in Studio Ghibli style, soft pastel colors, magical feeling.",
    "hA delicious slice of chocolate cake on a wooden table, soft background blur, high detail."
]

ButtonAi.addEventListener('click', function (){
    const userbox = product[Math.floor(Math.random() * product.length)]
    textBox.value = userbox;
    userbox.vlaue.trim()
    textBox.focus(); 
})


// genartBox.addEventListener('click', function (){
//     box.click()
// })