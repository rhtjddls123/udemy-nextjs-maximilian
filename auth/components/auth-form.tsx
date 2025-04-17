import Link from "next/link";
import img from "@/public/images/auth-icon.jpg";
import Image from "next/image";

export default function AuthForm() {
  return (
    <form id="auth-form">
      <div>
        <Image src={img} alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
