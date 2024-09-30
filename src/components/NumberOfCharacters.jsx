
export function NumberOfCharacters({characters}) {
    let message;
    if (characters.length === 0) {
        message = "There is no character";
    }
    else{
        message = "There is " + characters.length + " characters";
    }
    return (
        <div>
            {message}
        </div>
    );
  }