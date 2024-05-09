import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";

const Skills = () => {
    return(
        <div className="flex justify-center text-5xl mt-14 flex-col items-center">
            <h1>My skills</h1>
            <Card >
                <CardBody className="flex flex-row gap-3">
                    <Image
                          width={240}
                          alt="React img"
                          src="sticker-png-js-icon-logo-icon-react-icon-react-js-icon-turquoise-teal-aqua-symbol-circle.png"
                    />
                    <Image
                          width={240}
                          alt="React img"
                          src="png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png"
                    />
                    <Image
                          width={240}
                          alt="React img"
                          src="png-transparent-css-logo-thumbnail.png"
                    />
                    <Image
                          width={240}
                          alt="React img"
                          src="Unofficial_JavaScript_logo_2.svg.png"
                    />
                    <Image
                          width={240}
                          alt="React img"
                          src="Typescript_logo_2020.svg.png"
                    />
                    <Image
                          width={240}
                          alt="React img"
                          src="next-js-icon-2048x2048-5dqjgeku.png"
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default Skills