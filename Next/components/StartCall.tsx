import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";

// Gradient CSS for text
const gradientTextStyle = {
  background: 'linear-gradient(90deg, #6a82fb, #fc5c7d)', // Blue to pink gradient
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '1.5rem', // Font size for the paragraph
  display: 'inline-block', // Ensure the gradient is applied to the text correctly
};

// Gradient CSS for button
const gradientButtonStyle = {
  background: 'linear-gradient(90deg, #6a82fb, #fc5c7d)', // Blue to pink gradient
  border: 'none', // Remove default border
  borderRadius: '5px', // Rounded corners
  padding: '10px 20px', // Padding for the button
  color: '#fff', // Button text color (white)
  fontSize: '1rem', // Font size for button text
  cursor: 'pointer', // Pointer cursor on hover
  display: 'flex', // Flex display for centering
  alignItems: 'center', // Center vertically
  justifyContent: 'center', // Center horizontally
  minWidth: '150px', // Minimum width for the button
  height: '50px', // Set height to ensure it’s visible
};

export default function StartCall() {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <motion.div
          className={"fixed inset-0 p-4 flex items-center justify-center bg-background"}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <AnimatePresence>
            <motion.div
              className="flex flex-col items-center"
              variants={{
                initial: { scale: 0.5 },
                enter: { scale: 1 },
                exit: { scale: 0.5 },
              }}
            >
              {/* Introductory paragraph with gradient */}
              <p className="mb-4 text-center">
                <span style={gradientTextStyle}>
                  Hey there! I’m your AI buddy, ready to chat and help with whatever you need!
                </span>
              </p>
              <button
                style={gradientButtonStyle}
                onClick={() => {
                  connect()
                    .then(() => {})
                    .catch(() => {})
                    .finally(() => {});
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> {/* Flex for alignment */}
                  <Phone
                    className={"size-4 opacity-50"}
                    strokeWidth={2}
                    stroke={"currentColor"}
                  />
                  Start Call
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
