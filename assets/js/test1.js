window.addEventListener('message', function (eventData) {
  console.log("CHECKING FOR EVENT : SHIV");
  console.log(eventData);
  try {
      console.log("1 => ", eventData);
      console.log("1.1 => ", JSON.parse(eventData.data));
      
      if (JSON.parse(eventData.data)) {
          let event = JSON.parse(eventData.data);
          console.log(event)
      }

  } catch (error) {
      return;
  }
}, false);
