import React from "react";
import PropTypes from "prop-types";
function User({name,surname,age,isLoggedIn,adress,friends}) {
    if (!isLoggedIn) {
        return <>Giriş Yapamadınız!</>
    }
    return (<React.Fragment>
        <h3>
            <div>{name} {surname} {age} {isLoggedIn}</div>
            {`Adress:${adress.title}  
            Posta Kodu :${adress.zip}`}
        </h3>
        {friends && friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
        </React.Fragment>);
        
}

// ! Burada propertylerin tiplerini kontrol ettik. import etmeyi unutma
// Verinin zorunlu olarak çekilmesini belirmek için isRequired kullanmamız gerekiyo 
// Yani App te user companentini kullanırken zorunlu olarak tanımladığımız propertinin verlmesi gerektiğini ifade ediyoruz
// ! Birden fazla veri tipi tanımlamak için oneOfType kullanırız
User.propTypes = {
    name : PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age : PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    //! shape ile gönderilen properti obje ise obenin içindeki değer kontolu yapabiliriz.
    adress : PropTypes.shape({title: PropTypes.string.isRequired, zip:PropTypes.number.isRequired})
}
// ! Burada Eğer prop tanımlanmaz ise default olarak tanınan değerler atanır
User.defaultProps={
isLoggedIn :false,
name : "İsimsiz"
}
export default User;
