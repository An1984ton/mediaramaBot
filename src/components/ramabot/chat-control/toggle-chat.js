export default function toggleChat(params) {
    try{
        const ramabotBodyOpen = document.querySelector('.ramabot__body_box');
        ramabotBodyOpen.classList.toggle("ramabot__body_hidden");

        params.isOpen = !params.isOpen;
        if( !params.isOpen ) params.unreadMessages = [];

    }catch (e) {
        console.error('Проблемы открытия чата: ', e)
    }
}