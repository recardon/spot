import { api, endpoint, pathParam, response } from "@zenclabs/spot";

@api()
export class Api {
  @endpoint({
    method: "GET",
    path: "/users/:userId"
  })
  getUser(
    @pathParam({ description: "User unique identifier" }) userId: string
  ): Promise<{
    name: string;
    age?: number;
  }> {
    return response();
  }
}
