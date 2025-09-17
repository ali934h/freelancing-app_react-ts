import { useState } from "react";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Props = {};

function CompleteProfileForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("OWNER");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();
  const completeProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      if (user.status !== 2) {
        navigate("/");
        toast("Your Account is pending to active");
      } else {
        switch (user.role) {
          case "OWNER":
            navigate("/owner/dashboard");
            break;
          case "FREELANCER":
            navigate("/freelancer/dashboard");
            break;
          case "ADMIN":
            navigate("/admin/dashboard");
            break;
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form
      className="flex flex-col justify-between gap-y-2 sm:w-sm"
      onSubmit={completeProfileHandler}
    >
      <TextField
        idTitle="name"
        label="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField
        idTitle="email"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="flex items-center justify-center gap-x-3 py-2">
        <RadioInput
          id="OWNER"
          label="owner"
          checked={role === "OWNER"}
          name="role"
          onChange={(e) => setRole(e.target.value)}
          value="OWNER"
        />
        <RadioInput
          id="FREELANCER"
          label="freelancer"
          checked={role === "FREELANCER"}
          name="role"
          onChange={(e) => setRole(e.target.value)}
          value="FREELANCER"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Confirm
      </button>
    </form>
  );
}

export default CompleteProfileForm;
