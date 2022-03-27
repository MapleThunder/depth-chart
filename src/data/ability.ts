export function getAbility(num: number): string {
  switch (num) {
    case 1:
      return "Unconvincing";
    case 2:
      return "Competent";
    case 3:
      return "Accomplished";
    case 4:
      return "Good";
    case 5:
      return "Great";

    default:
      return "Number Error";
  }
}
