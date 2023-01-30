function testing() {
    let input = document.querySelector('#email')
    let value = input.value

    if(value.includes('@') && value.includes('.')) {
        let pozicijaAt = value.indexOf('@')
        let pozicijaTacka = value.indexOf('.')
        let izmedjuTackaAt = value.substring(pozicijaAt + 1, pozicijaTacka)

        if(izmedjuTackaAt.length > 0) {
            
            let prijeAt = value.substring(0, pozicijaAt)

            if(prijeAt.length > 2) {
                let posleTacke = value.substring(pozicijaTacka + 1, value.length)

                if(posleTacke.length > 2) {
                    console.log('dobar')
                } else {
                    console.log('mail nije validan')
                }

            } else {
                console.log('mail nije validan')
            }

        } else {
            console.log('mail nije validan')
        }

    } else {
        console.log('ne sadrzi')
    }

}