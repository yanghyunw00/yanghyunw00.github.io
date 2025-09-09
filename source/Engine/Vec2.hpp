/**
 * \file Vec2.hpp
 * \author Jonathan Holmes
 * \author Hyunwoo Yang
 * \date 2025 Fall
 * \par CS200 Computer Graphics I
 * \copyright DigiPen Institute of Technology
 */

#pragma once
#include <iostream>
#include <limits>

namespace Math
{
    struct vec2;

    struct [[nodiscard]] ivec2
    {
        int x{ 0 };
        int y{ 0 };

        // Constructors
        ivec2() noexcept = default;
        ivec2(int x, int y) noexcept;
        explicit ivec2(int xy) noexcept;

        // Conversion
        explicit ivec2(const vec2& v) noexcept;


        // Arithmetic operators
        ivec2& operator+=(const ivec2& rhs) noexcept;
        ivec2& operator-=(const ivec2& rhs) noexcept;
        ivec2& operator*=(int scalar) noexcept;
        ivec2& operator/=(int scalar) noexcept;

        // Unary operators
        ivec2 operator+() const noexcept;
        ivec2 operator-() const noexcept;
    };

    // Non-member operators
    ivec2 operator+(const ivec2& lhs, const ivec2& rhs) noexcept;
    ivec2 operator-(const ivec2& lhs, const ivec2& rhs) noexcept;
    ivec2 operator*(const ivec2& v, int scalar) noexcept;
    ivec2 operator*(int scalar, const ivec2& v) noexcept;
    ivec2 operator/(const ivec2& v, int scalar) noexcept;

    // Comparison operators
    bool operator==(const ivec2& lhs, const ivec2& rhs) noexcept;
    bool operator!=(const ivec2& lhs, const ivec2& rhs) noexcept;

    // Stream operators
    std::ostream& operator<<(std::ostream& os, const ivec2& v);
    std::istream& operator>>(std::istream& is, ivec2& v);

    /*-------------------------This is vec2--------------------------------*/

    struct [[nodiscard]] vec2
    {
        double x{ 0 };
        double y{ 0 };

        // Constructors
        vec2() noexcept = default;
        vec2(double x, double y) noexcept;
        explicit vec2(double xy) noexcept;

        // Conversion
        explicit vec2(const ivec2& v) noexcept;

        // Arithmetic operators
        vec2& operator+=(const vec2& rhs) noexcept;
        vec2& operator-=(const vec2& rhs) noexcept;
        vec2& operator*=(double scalar) noexcept;
        vec2& operator/=(double scalar) noexcept;

        // Unary operators
        vec2 operator+() const noexcept;
        vec2 operator-() const noexcept;
    };

    // Non-member operators
    vec2 operator+(const vec2& lhs, const vec2& rhs) noexcept;
    vec2 operator-(const vec2& lhs, const vec2& rhs) noexcept;
    vec2 operator*(const vec2& v, double scalar) noexcept;
    vec2 operator*(double scalar, const vec2& v) noexcept;
    vec2 operator/(const vec2& v, double scalar) noexcept;


    // Comparison operators
    bool operator==(const vec2& lhs, const vec2& rhs) noexcept;
    bool operator!=(const vec2& lhs, const vec2& rhs) noexcept;

    // Stream operators
    std::ostream& operator<<(std::ostream& os, const vec2& v);
    std::istream& operator>>(std::istream& is, vec2& v);
}
