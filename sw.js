self.addEventListener("push", (event) => {
  let data = {};
  try { data = event.data.json(); } catch {}

  const title = data.title || "Notification";
  const options = {
    body: data.body || "",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
