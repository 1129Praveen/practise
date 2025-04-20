import NextAuth from "next-auth";

const AuthActionProvider = {
  id: "authaction",
  name: "AuthAction",
  type: "oauth",
  wellKnown: `https://${process.env.AUTHACTION_TENANT_DOMAIN}/.well-known/openid-configuration`,
  clientId: process.env.AUTHACTION_CLIENT_ID,
  clientSecret: process.env.AUTHACTION_CLIENT_SECRET,
  authorization: {
    params: { scope: "openid profile email" }
  },
  token: {
    params: {
      grant_type: "authorization_code"
    }
  },
  idToken: true,
  checks: ["pkce", "state"],
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
    };
  }
};

export default NextAuth({
  providers: [
    AuthActionProvider
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
  },
  debug: true,
});