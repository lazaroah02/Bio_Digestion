export function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  export function formatDateWithTime(timestamp) {
    if(timestamp == null){
      return "Nunca"
    }
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()} ${date.getHours() < 12?'AM':'PM'}`;
  }  