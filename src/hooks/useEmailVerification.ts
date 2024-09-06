import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { auth } from "@/firebase/firebaseConfig";
import { applyActionCode } from "firebase/auth";
import { toast } from "sonner";

const useEmailVerification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const mode = searchParams.get("mode");
    const actionCode = searchParams.get("oobCode");

    if (mode === "verifyEmail" && actionCode) {
      applyActionCode(auth, actionCode)
        .then(() => {
          toast.success("Email успешно подтвержден!");
        })
        .catch((error) => {
          console.error("Error verifying email:", error);
          toast.error("Ошибка при подтверждении email");
        });
    }
  }, [auth, searchParams, navigate]);
};

export default useEmailVerification;
