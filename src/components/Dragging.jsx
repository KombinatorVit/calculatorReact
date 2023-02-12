import React, {useEffect} from 'react';
import {Box} from "@chakra-ui/react";

const Dragging = (props) => {

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.draggable'))
        elements.map(e => e.addEventListener('mouseenter', function (e) {
            drag(e)
        }))


    })


    function drag(element) {
        let draggable = element.target
        draggable.onmousedown = function (event) {
            draggable.style.position = 'absolute'
            draggable.style.zIndex = 1000
            document.body.append(draggable)
            moveAt(event.pageX, event.pageY)

        }

        function moveAt(pageX, pageY) {
            draggable.style.left = pageX - draggable.offsetWidth / 2 + 'px'
            draggable.style.top = pageY - draggable.offsetHeight / 2 + 'px'
        }


        let currentDroppable = null

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            draggable.hidden = true
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            draggable.hidden = false
            if (!elemBelow) return
            let droppableBelow = elemBelow.closest('.droppable')
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable)
                }
                currentDroppable = droppableBelow
                if (currentDroppable) {
                    enterDroppable(currentDroppable)
                }


            }
        }


        function enterDroppable(elem) {
            draggable.onmouseup = function () {
                draggable.style.display = 'none'
                props.setResult(eval(`${props.result}
                ${elem.innerHTML}
                ${draggable.innerHTML}`))
                document.removeEventListener('mousemove', onMouseMove);
                draggable.onmouseup = null;
                draggable = null;
                return
            }
            draggable.style.cursor = 'copy'

        }


        function leaveDroppable(elem) {
            elem.style.background = ''
            draggable.style.cursor = 'default'

        }

        document.addEventListener('mousemove', onMouseMove);
        draggable.onmouseup = function () {
            draggable.style.display = 'none'
            document.removeEventListener('mousemove', onMouseMove)
            props.setHistory(draggable.innerHTML)
            draggable.onmouseup = null
            draggable = null

        }
    }


    return (
        <Box>
            {props.children}
        </Box>
    );
};

export default Dragging;