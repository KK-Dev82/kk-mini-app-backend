export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}