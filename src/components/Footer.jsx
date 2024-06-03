import React from 'react';

export default function Footer() {
    return (
        <>
            <footer>
                <div style={{ padding: "15px", color:"black", textAlign:"left" }}>
                    <div id="block6">
                    <p><h3>График работы:</h3></p>
        <p>Понедельник: (08:00 - 22:00)<br/>
        Вторник: (08:00 - 22:00)<br/>
        Среда: (08:00 - 22:00)<br/>
        Четверг: (08:00 - 22:00)<br/>
        Пятница: (08:00 - 22:00)<br/>
        Суббота: (10:00 - 17:00)<br/>
        Воскресенье: (Выходной)</p>
        <hr/>
        <p>Связаться с нами можно по номеру:<br/>
        +7 (767) 123-33-32<br/>
        или<br/>
        +7 (765) 432-11-12</p>
        <hr/>&copy; Все права защищены 2024
                    </div>
                    <div id="block7">
                        <p><h3>Наше местоположение:</h3></p>
                        <iframe
                            title="map"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A079c56b0b51d571c29c2b37f31fdd824bb090b0e59573e41ba5bf975888e0208&amp;source=constructor"
                            width="350"
                            height="250"
                            frameborder="0"
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}