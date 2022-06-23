import mainMenuMusic from "./MainMenuMusic.mp3";

const Music = () => {
    return (
        <audio id="main_menu_music" autoPlay={true}>
            <source src={mainMenuMusic} type="audio/mp3" />
        </audio>
    );
}

export {
    Music
}