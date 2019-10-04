import React from 'react';

type CardProps = {
    title: string,
    paragraph: string,
    desciption?: string             // ? used for optional 
}

const TestComponent = ({ title, paragraph }: CardProps) => {
    return <React.Fragment>
        <h1>This is Test Branch update</h1>
        <h2>{title}</h2>
        <h3>{paragraph}</h3>
    </React.Fragment>
}
export default TestComponent
