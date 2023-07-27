import { useEffect, useState } from "react"
const App = () => {
    const [header, setHeader] = useState()
    useEffect(() => {

        fetch('http://api.paulahage.com:8003/getHeader', {
            headers: {
                'Authorization': `Bearer 39c7c6c1-3000-495a-a9c4-e13510a75f2e`
            }
        }).then((response) => response.text())
        .then((text) => {
            setHeader(text)
        })

    }, [])

    return <div>
        <div class="header" dangerouslySetInnerHTML={{ __html: header }} />
    <div class="banner">
      <div class="banner__picture"></div>
      
      <div class="banner__text">
        <span>The best deal is here</span>
        <a class="banner__button">
          Buy a plan
        </a>
      </div>
    </div>
    <div class="bottom">
      Stay Connected with Skynet:

At Skynet, we are your gateway to seamless communication and cutting-edge technology. Follow us on social media to stay updated on our latest products, services, and special offers.
<br/><br/>
Contact Skynet:
<br/><br/>
For any inquiries, assistance, or feedback, our dedicated support team is here to help. Reach out to us via phone, email, or visit our conveniently located stores.
<br/><br/>
<span>
<a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
</span>
<br/><br/>
We value your privacy and are committed to safeguarding your information. Please read our privacy policy to understand how we handle your data. By using Skynet's services, you agree to our terms of service.
<br/><br/>
© 2023 Skynet. All rights reserved.
<br/><br/>
Address: 123 Main Street, Cityville, Country
Phone: +123 456 7890 | Email: info@skynettelecom.com
      </div>
  </div>

}

export default App;