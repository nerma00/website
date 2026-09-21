export function getAgeInYears(birthday: Date, now: Date = new Date()): number {
  let years: number = now.getFullYear() - birthday.getFullYear();

  const anniversary = new Date(birthday);
  anniversary.setFullYear(now.getFullYear());
  if (anniversary > now) {
    years--;
    anniversary.setFullYear(anniversary.getFullYear() - 1);
  }

  const nextYear = new Date(anniversary);
  nextYear.setFullYear(anniversary.getFullYear() + 1);
  const yearLength: number = nextYear.getTime() - anniversary.getTime();

  return years + (now.getTime() - anniversary.getTime()) / yearLength;
}
