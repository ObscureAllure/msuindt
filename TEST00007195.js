// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

today = new Date()
month = today.getMonth() + 1
year = today.getFullYear()

selectedDate = new Date("01/01/1900")
selectedContent = ""

varLength = 7
var entryDate = new Array(varLength)
var entryContent = new Array(varLength)

entryDate[0] = "10/18/2020"
entryContent[0] = "TEST 1 <a href=\"../modules/132459\">Advising Information</a>&nbsp; <a href=\"http://www.abc.com\">Test External Link</a><br>"

entryDate[1] = " 10/19/2020"
entryContent[1] = ""

entryDate[2] = " 10/20/2020"
entryContent[2] = ""

entryDate[3] = " 10/21/2020"
entryContent[3] = ""

entryDate[4] = " 10/22/2020"
entryContent[4] = ""

entryDate[5] = " 10/23/2020"
entryContent[5] = ""

entryDate[6] = " 10/24/2020"
entryContent[6] = ""

if (typeof display == "undefined") { var display = "date" }

if (display == "random")
{
  var randomNumber = Math.random()
  randomNumber *= varLength
  randomNumber = parseInt(randomNumber)
  if(isNaN(randomNumber)) randomNumber = 0
  else randomNumber %= varLength
  selectedContent = entryContent[randomNumber]
}
else
{
  for (x=0; x<(entryContent.length); x++)
  {
    tempDate = new Date(entryDate[x])
    tempContent = entryContent[x]
    if ((tempDate <= today) && (tempDate > selectedDate))
    {
      selectedContent = tempContent
      selectDate = tempDate
    }
  }
}

document.write (selectedContent)