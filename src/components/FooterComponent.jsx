export function FooterComponent ({ isShow }) {
    return (
        <div id="contactPlate" style={{
            display: isShow? 'block' : 'none'
                }}>
           <p className="contact">email:williammilkyan@hotmail.com</p>
           <p className="contact">phone:604-XXX-XXXX</p>
        </div>
    )
}