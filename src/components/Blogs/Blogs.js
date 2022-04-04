import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Context api?</Accordion.Header>
                    <Accordion.Body className='text-start'>

                        The Context API from React is a way to pass data through the component tree without having prop-drilling manually at every level. It is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is semantic tag?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Semantic HTML is a HTML writing style for labelling code usefully and meaningfully to both the developer and the browser.
                        For example, the 'div' and 'span' elements tell nothing about their content. While elements such as 'from', 'table and 'article' clearly state what it’s content is meant to display within their tags. The prior tags are non-semantic; the later tags are semantic.

                        So, there are essentially three broad categories that semantic HTML helps to improve: maintainability, accessibility and SEO. Let’s dive into how these categories can be improved with Semantic HTML.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Inline vs Inline-Block vs Block</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Inline
                        <br />
                        The display property specifics the display behavior of an element. It’s a must know for controlling the layout of an element.Inline displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects.
                        <br />
                        <br />
                        inline-block
                        <br />
                        Displays an element as an inline-level block container. You CAN set height and width values.Alright, let's move on to inline-block. It’s essentially the same thing as inline, except that you can set height and width values.
                        <br />
                        <br />
                        block
                        <br />
                        block elements starts on a NEW line and takes up the full width available. So that means block elements will occupy the entire width of its parent element.
                        <br />
                        <br />
                        Here are a few elements that have a default block property:
                        <li>div</li>
                        <li>h1</li>
                        <li>p</li>
                        <li>li</li>
                        <li>section</li>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;