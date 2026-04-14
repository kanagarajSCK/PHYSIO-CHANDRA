import { useState, type FormEvent, type ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BOOKING_PHONE = "919390162611";

const BookingDialog = ({ trigger }: { trigger: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 🚨 Basic validation (don’t skip this)
    if (!name.trim() || !phone.trim()) {
      alert("Name and Phone are required");
      return;
    }

    // 📩 Clean WhatsApp message format
    const whatsappMessage = `
📅 *New Appointment Request*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
⏰ *Preferred Time:* ${preferredTime || "Not specified"}

📝 *Message:*
${message || "No message provided"}

--------------------------
Sent from Website
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const url = `https://wa.me/${BOOKING_PHONE}?text=${encodedMessage}`;

    window.open(url, "_blank");

    // ✅ Reset form properly
    setName("");
    setPhone("");
    setPreferredTime("");
    setMessage("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Book your appointment</DialogTitle>
          <DialogDescription>
            Fill in your details and send a WhatsApp request to{" "}
            <strong>+91 9390162611</strong>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              Full name
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label className="space-y-2 text-sm font-medium">
              Contact number
              <Input
                type="tel"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium">
            Preferred date / time
            <Input
              type="text"
              placeholder="e.g. Tomorrow morning"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
            />
          </label>

          <label className="space-y-2 text-sm font-medium">
            Your note
            <Textarea
              placeholder="Tell me about your concern"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </label>

          <DialogFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <DialogClose asChild>
              <Button variant="outline" type="button" className="w-full sm:w-auto">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" className="w-full sm:w-auto">
              Send WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;