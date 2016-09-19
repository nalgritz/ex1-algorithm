function checkAnagrams(phrase1, phrase2) {
  function setForCompare (str) {
    return str.toLowerCase().split('').sort().join('')
  };
  return setForCompare(phrase1) == setForCompare(phrase2);
};

checkAnagrams("Listen", "silent");