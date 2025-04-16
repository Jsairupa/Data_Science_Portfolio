"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function DataVisualization3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Responsive handling
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Create data points
    const dataPoints = []
    const pointCount = 100

    const pointGeometry = new THREE.SphereGeometry(0.05, 16, 16)

    for (let i = 0; i < pointCount; i++) {
      // Create a point with random position
      const x = (Math.random() - 0.5) * 8
      const y = (Math.random() - 0.5) * 8
      const z = (Math.random() - 0.5) * 8

      // Create material with a color based on position
      const hue = 210 + (x + y + z) * 5
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${hue}, 70%, 60%)`),
        transparent: true,
        opacity: 0.7,
      })

      const point = new THREE.Mesh(pointGeometry, material)
      point.position.set(x, y, z)

      // Add velocity for animation
      point.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
        ),
      }

      scene.add(point)
      dataPoints.push(point)
    }

    // Create connections between points
    const connections = []
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4682b4,
      transparent: true,
      opacity: 0.2,
    })

    for (let i = 0; i < dataPoints.length; i++) {
      for (let j = i + 1; j < dataPoints.length; j++) {
        if (Math.random() > 0.95) {
          const geometry = new THREE.BufferGeometry().setFromPoints([dataPoints[i].position, dataPoints[j].position])

          const line = new THREE.Line(geometry, lineMaterial)
          scene.add(line)

          connections.push({
            line,
            pointA: dataPoints[i],
            pointB: dataPoints[j],
          })
        }
      }
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the entire scene slowly
      scene.rotation.y += 0.002
      scene.rotation.x += 0.001

      // Update data points
      dataPoints.forEach((point) => {
        // Move points based on their velocity
        point.position.add(point.userData.velocity)

        // Bounce off invisible boundaries
        if (Math.abs(point.position.x) > 4) point.userData.velocity.x *= -1
        if (Math.abs(point.position.y) > 4) point.userData.velocity.y *= -1
        if (Math.abs(point.position.z) > 4) point.userData.velocity.z *= -1
      })

      // Update connections
      connections.forEach((connection) => {
        connection.line.geometry.setFromPoints([connection.pointA.position, connection.pointB.position])
        connection.line.geometry.attributes.position.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Clean up Three.js resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (object.material instanceof THREE.Material) {
            object.material.dispose()
          } else if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose())
          }
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
