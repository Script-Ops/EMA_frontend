import { ICurrentUser } from "~~/interfaces/currentUser";

export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();
  const currentUser = ref<ICurrentUser | null>(null);
  function logIn(
    credentials: {
      username: string;
      password: string;
    },
    redirectTo: string
  ) {
    if (
      credentials.username !== "mjeziorkowski" ||
      credentials.password !== "password"
    )
      return { status: "error", message: "Invalid credentials" };
    //TODO: implement login logic
    currentUser.value = {
      id: "1",
      initials: "MJ",
      name: "Michal Jeziorkowski",
      username: "mjeziorkowski",
      email: "michaljeziorkowski@gmail.com",
      //random face
      avatar: "https://avatars.githubusercontent.com/u/24764215?v=4",
    };

    if (redirectTo) {
      router.push(redirectTo);
    } else {
      router.push("/");
    }
    return;
  }
  function logOut() {
    currentUser.value = null;
    router.push("/login");
  }
  return {
    currentUser,
    logIn,
    logOut,
  };
});
